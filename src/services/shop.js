const storage = {
    1001: { name: "良品铺子" },
    1002: { name: "来伊份" },
    1003: { name: "三只松鼠" },
    1004: { name: "百草味" },
};
//暂时把数据写在内存里

async function delay(ms = 200) {
    await new Promise((r) => setTimeout(r, ms));
}

class ShopService {
    async init() {
        await delay();
    }

    async find({ id, pageIndex = 0, pageSize = 10 }) {
        await delay();

        if (id) {
            return [storage[id]].filter(Boolean);
        }

        return Object.keys(storage)
            .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
            .map((id) => ({ id, ...storage[id] }));
    }

    async modify({ id, values }) {
        await delay();

        const target = storage[id];

        if (!target) {
            return null;
        }

        return Object.assign(target, values);
        //assign 方法将参数二的对象分配至参数一的对象,返回分配后的对象
    }

    async remove({ id }) {
        await delay();

        const target = storage[id];

        if (!target) {
            return false;
        }

        return delete storage[id];
        //delete 删除对象的指定属性
    }
}

let service;
module.exports = async function() {
    if (!service) {
        service = new ShopService();
        await service.init();
    }
    return service;
};