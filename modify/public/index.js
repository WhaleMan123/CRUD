const modify_storageName = "board";
const modify_initialStorage = [];

class Modify_storage {
    name;
    storage;
    constructor(StorageName = modify_storageName) {
        this.name = StorageName;
        this.storage = localStorage.getItem(this.name);
    }

    get() {
        if (!this.storage) return odify_initialStorage;
        return JSON.parse(this.storage);
    }

    set(item) {
        const storage = this.get();
        const serialize = JSON.stringify([...storage, item]);
        localStorage.setItem(this.name, serialize);
    }

    modify(modifiedrow, uid) {
        const storage = this.get();
        const newArray = [...storage.slice(0, uid - 1), modifiedrow, ...storage.slice(uid)];
        localStorage.setItem(this.name, JSON.stringify(newArray));
    }

    getByUid(uid) {
        return this.get().find((row) => row.uid === parseInt(uid));
    }
}

const modify_getParams = () => {
    const { search } = window.location;
    if (!search.length) return null;
    return search
        .slice(1)
        .split("&")
        .reduce((acc, param) => {
            const [key, value] = param.split("=");
            acc[key] = value;
            return acc;
        }, {});
};

class Modify_boardRow {
    uid;
    title;
    content;
    writer;
    created_at;
    hit;

    constructor(row) {
        this.uid = row.uid;
        this.title = row.title;
        this.content = row.content;
        this.writer = row.writer;
        this.created_at = "2023-08-09";
        this.hit = 0;
    }
}

const modify_storage = new Modify_storage();

const uid = modify_getParams().id;
const modify_row = modify_storage.getByUid(uid);

const modify_title = document.querySelector("#modify-title");
const modify_writer = document.querySelector("#modify-writer");
const modify_content = document.querySelector("#modify-content-textarea");

modify_title.value = modify_row.title;
modify_writer.value = modify_row.writer;
modify_content.value = modify_row.content;

const modify_modifyForm = document.querySelector("#modify-form");

modify_modifyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;

    modify_row.title = title;
    modify_row.writer = writer;
    modify_row.content = content;

    const modifiedrow = modify_row;

    modify_storage.modify(modifiedrow, uid);

    location.href = `../view/index.html?id=${uid}`;
});
