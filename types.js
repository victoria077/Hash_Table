let ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
let LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
        let node = new ListNode(value);
        let currentnode;
        if (this.head === null) {
            this.head = node;
        }
        else {
            currentnode = this.head;
            while (currentnode.next) {
                currentnode = currentnode.next;
            }
            currentnode.next = node;
        }
    };
    return LinkedList;
}());
let list = new LinkedList();
list.add("Hello World");
list.add(8);
list.add("rrrrr");
