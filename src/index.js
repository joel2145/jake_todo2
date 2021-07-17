const onClickAdd = () => {
    // テキストボックス内の値を取得
    const inputText = document.getElementById("add-text").value;

    // 初期化
    document.getElementById("add-text").value = "";

    // liを生成
    const li = document.createElement("li");
    li.className = "todo-item";

    // divを生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pを生成
    const p = document.createElement("p");
    p.innerText = inputText;

    // 完了ボタンを生成
    const doneButton = document.createElement("button");
    doneButton.innerText = "完了";
    doneButton.addEventListener("click", () => {
        alert("完了");
    });

    // 削除ボタンを生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンのliタグを削除する
        const deleteTarget = deleteButton.closest(".todo-item")
        document.getElementById("todo-list").removeChild(deleteTarget);
    });

    // liの中にdivを配置
    li.appendChild(div);

    // divの中にp、完了ボタン、削除ボタンを配置
    div.appendChild(p);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);


    // 未完了リストに追加
    document.getElementById("todo-list").appendChild(li);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());