const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
      return;
    }

    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        break; // Duplicate values are ignored
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let current = this._root;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  remove(data) {
    this.pointer = this._removeNode(this._root, data);
  }
  _removeNode(node, data) {
    if (!node) {
      return null;
    };
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    };
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } 
    if (!node.left && !node.right) {return null; }
      if (!node.left) {return node.right; }
      if (!node.right) {return node.left; }
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;    
  }

  min() {
    if (!this._root) {
      return null;
    }
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this._root) {
      return null;
    }
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
