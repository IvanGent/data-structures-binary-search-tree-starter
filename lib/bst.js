class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val) {
       const newNode = new TreeNode(val);
       let curr = this.root;
       if (!this.root) {
           this.root = newNode;
       } else {
           while (true) {
               if (val < curr.val) {
                   if (curr.left === null) {
                       curr.left = newNode;
                       return;
                   } else {
                       curr = curr.left;
                   }
               } else {
                   if (curr.right === null) {
                       curr.right = newNode;
                       return;
                   } else {
                       curr = curr.right;
                   }
               }
           }
       }
   }

   searchRecur(val) {
    if(!this.root) return false;
   }

   searchIter(val) {
    if(!this.root) return false;
   }
}

module.exports = {
    TreeNode,
    BST
};
