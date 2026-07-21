export type ResponsiveTableRow = {
  _key?: string;
  cells?: string[];
  tone?: "default" | "critical" | "high" | "medium";
};

export type ResponsiveTableValue = {
  _key?: string;
  _type: "responsiveTable";
  caption?: string;
  headers?: string[];
  rows?: ResponsiveTableRow[];
};

type ResponsiveBlogTableProps = {
  value?: ResponsiveTableValue;
};

export function ResponsiveBlogTable({ value }: ResponsiveBlogTableProps) {
  const headers = cleanTextList(value?.headers);
  const rows = Array.isArray(value?.rows) ? value.rows : [];

  if (headers.length < 2 || rows.length === 0) return null;

  const label = value?.caption?.trim() || "Article data table";

  return (
    <figure className="blog-table-figure">
      <div
        className="blog-table-scroll"
        role="region"
        aria-label={label}
        tabIndex={0}
        data-lenis-prevent
      >
        <table className="blog-table">
          {value?.caption?.trim() ? (
            <caption>{value.caption.trim()}</caption>
          ) : null}
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={`${header}-${index}`}
                  scope="col"
                  className={index === 0 ? "blog-table-priority-head" : undefined}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const cells = cleanTextList(row.cells, false);
              const tone = row.tone || "default";

              return (
                <tr key={row._key || `table-row-${rowIndex}`}>
                  {headers.map((header, cellIndex) => {
                    const isLastCell = cellIndex === headers.length - 1;
                    const classes = [
                      cellIndex === 0 ? "blog-table-priority" : "",
                      isLastCell && tone !== "default"
                        ? `blog-table-tone-${tone}`
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <td
                        key={`${row._key || rowIndex}-${cellIndex}`}
                        data-label={header}
                        className={classes || undefined}
                      >
                        {cells[cellIndex] || "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function cleanTextList(value?: string[], removeEmpty = true) {
  if (!Array.isArray(value)) return [];
  const values = value.map((item) =>
    typeof item === "string" ? item.trim() : "",
  );
  return removeEmpty ? values.filter(Boolean) : values;
}
