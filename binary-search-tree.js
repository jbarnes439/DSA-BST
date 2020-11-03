class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replacewith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key < this.key && this.left) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

}

const main = function () {
    // let ch = 'EASYQUESTION'
    const BST = new BinarySearchTree
    ch = [3, 2, 1, 4, 5, 6, 7]

    for (let i = 0; i < ch.length; i++) {
        BST.insert(ch[i], i)
    }

    // console.log(BST.find(5))
    return BST
}

// console.log(main())

let res = []
const displayBST = function (node) {

    if (node) {
        console.log(node)
        res.push(node.key)
        displayBST(node.left)
        displayBST(node.right)
    }
    return res
}

const BST = main()

// console.log(displayBST(main()))

function sumOfKeys(t) {
    if (!t) {
        return 0;
    }
    return sumOfKeys(t.left) + t.value + sumOfKeys(t.right)
}

// console.log(sumOfKeys(BST))

// 5 

function leafs(t, count = 0, arr = []) {
    if (!t) {
        arr.push(count)
    }
    else {
        count++
        leafs(t.left, count, arr)
        leafs(t.right, count, arr)
    }
}

function heightOfBST(bst) {
    const count = []
    leafs(BST, 0, count)
    return Math.max(...count)
}

// console.log(heightOfBST(BST))


// 6

function checkIfBST(node) {
    if (node.left) {
        if (node.left > node.key) {
            return false
        }
        checkIfBST(node.left)
    }
    if (node.right) {
        if (node.right < node.key) {
            return false
        }
        checkIfBST(node.right)
    }
    return true
}

// console.log(checkIfBST(BST))\\

function thirdLargest(BST, result = []) {

    while (BST.left) {
        if (BST.left.key !== null) {
            console.log(BST.key)
            result.push(BST.key)
            return
        }
        thirdLargest(BST.left)
    }

    while (BST.right) {
        if (BST.right.key !== null) {
            result.push(BST.key)
            return
        }
        thirdLargest(BST.right)
    }
    return result
}

// console.log(displayBST(BST))

// console.log(thirdLargest(BST))

function thirdLargest2(tree) {
    let result = displayBST(tree).sort()
    console.log(result)
    return result[result.length - 3]
}

// console.log(thirdLargest2(BST))

// 8 

function isBalanced(root, depth = 0) {
    
    if(!root) return 0

    const leftDepth = isBalanced(root.left, depth++)
    // console.log(left_height)    
    const rightDepth = isBalanced(root.right, depth++)
    // console.log(right_height)

    if(Math.abs(leftDepth - rightDepth) <= 1){
        return true
    }
    return false
}

// console.log(isBalanced(BST, depth = 0))


//9 

function sameBSTs(arr1, arr2) {
    if(arr1.length !== arr2.length) return false
   let firstArr = 0
   let secArr = 0
   for(let i = 0; i < arr1.length; i++) {
        firstArr += arr1[i]
        secArr += arr2[i]
   }
   console.log(firstArr)
   console.log(secArr)
   if(firstArr === secArr) {
       return true
   }
   return false
}

console.log(sameBSTs([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]))