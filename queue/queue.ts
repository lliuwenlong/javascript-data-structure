class QueueNode<T> {
    public value: T;
    public next: QueueNode<T> | null = null;

    constructor (value: T) {
        this.value = value;
    }
}

class Queue<T> {
    // 头指针
    private head: QueueNode<T> | null = null;
    // 尾指针
    private tail: QueueNode<T> | null = null;
    // 列表的长度
    private length = 0;

    // 通过size读取列表的长度
    get size() {
        return this.length;
    }

    constructor () {
        this.clear;
    }

    // 入队列
    enqueue (value: T) {
        // 生成一个node
        const node = new QueueNode<T>(value);
        // 判断头指针是否为空
        if (this.head === null) {
            // 初始化头指针
            this.head = node;
            // 初始化为指针，和头指针用同一个指针地址
            this.tail = node;
        } else {
            if (this.tail) {
                // 先改变尾指针的next指针，相当于把队列的最末尾添加一个元素
                this.tail.next = node;
                // 改变尾指针方便下次添加元素
                this.tail = node;
            }
        }

        this.length++;
    }

    // 出队列
    dequeue () {
        const current = this.head;

        if (current === null) {
            return;
        }
        this.head = current.next;
        this.length--;

        return current.value;
    }

    // 清理队列
    clear () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 实现队列可迭代
    [Symbol.iterator] () {
        let current = this.head;

        return {
            next () {
                if (current) {
                    const val = current.value;
                    current = current.next;
                    return {
                        value: val,
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
}

const queue = new Queue<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);

// for (const i of queue) {
//     console.log(i);
// }


