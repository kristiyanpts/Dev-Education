function Main(string) {
  let output = [];
  output.push("<table>");
  let object = JSON.parse(string);

  let keys = Object.keys(object[0]);
  output.push(
    `<tr>${keys.map((e) => `<th>${escapeHtml(e)}</th>`).join("")}</tr>`
  );

  for (const value of object) {
    output.push(
      `<tr>${keys.map((e) => `<td>${escapeHtml(value[e])}</td>`).join("")}</tr>`
    );
  }

  output.push("</table>");

  return output.join("\n");

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

console.log(
  Main(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`)
);
