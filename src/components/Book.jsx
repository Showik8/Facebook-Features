import { useState, useEffect } from "react";

function DocumentTitle() {
  const [count, setCount] = useState(0);

  // TODO: useEffect
  // document.title = `დააჭირე ${count}-ჯერ`
  // dependency: [count] — რომ ყოველი count-ის ცვლილებაზე გადატვირთოს

  console.log(document.title);

  return (
    <div>
      <h2>დააჭირე: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>დააკვირდი ბრაუზერის ჩანართის სათაურს ↑</p>
    </div>
  );
}

export default DocumentTitle;
