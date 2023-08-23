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

const { uid } = modify_getParams();
const modify_row = modify_storage.getByUid(uid);

const modify_title = document.querySelector("#modify-title");
