import type { KnowledgeSource, KnowledgeSourceReference } from "../types/universalKnowledge";

function primaryLabel(s: KnowledgeSource): string {
  return s.documentName || s.fileName || s.name;
}

export function pickPrimarySource(
  sources: KnowledgeSource[],
  evidence?: KnowledgeSourceReference[] | null,
): KnowledgeSource | null {
  if (!sources || sources.length === 0) return null;
  const ev = (evidence || []).find((e) => !!e.sourceId);
  if (ev) {
    const found = sources.find((s) => s.id === ev.sourceId);
    if (found) return found;
  }
  return sources[0];
}

export function SourceTags({
  sources,
  evidence,
  actualAt,
  onOpen,
}: {
  sources: KnowledgeSource[];
  evidence?: KnowledgeSourceReference[] | null;
  actualAt?: string | null;
  onOpen: () => void;
}) {
  const primary = pickPrimarySource(sources, evidence);
  const rest = primary ? sources.length - 1 : 0;

  return (
    <div className="np-src-tags">
      {primary ? (
        <>
          <button
            type="button"
            className="np-src-tag"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            {primaryLabel(primary)}
          </button>
          {rest > 0 && (
            <button
              type="button"
              className="np-src-tag np-src-tag--more"
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
              aria-label={`Ещё ${rest} источник${rest === 1 ? "" : "ов"}`}
            >
              +{rest}
            </button>
          )}
        </>
      ) : (
        <span className="np-src-tag np-src-tag--empty">Источник не указан</span>
      )}
      {actualAt && <span className="np-src-actual">{actualAt}</span>}
    </div>
  );
}