document.addEventListener("DOMContentLoaded", () => {
  // ヘッダーの読み込み
  fetch("/pages/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#header").innerHTML = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  // フッターの読み込み
  fetch("/pages/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#footer").innerHTML = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });


  // カードセクション
  fetch("/pages/card.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#service").innerHTML = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
