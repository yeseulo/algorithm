// 208. Implement Trie (Prefix Tree)

// 1
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (node[word[i]] == null) node[word[i]] = {};
      node = node[word[i]];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (node == null) return null;
      node = node[word[i]];
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}


// 2
function Trie() {
  this.root = {};
}

Trie.prototype.insert = function (word) {
  let current = this.root;
  word.split('').forEach((ch) => (current = current[ch] = current[ch] || {}));
  current.isWord = true;
};

Trie.prototype.traverse = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!current) return null;
    current = current[word[i]];
  }
  return current;
};

Trie.prototype.search = function (word) {
  let node = this.traverse(word);
  return !!node && !!node.isWord;
};

Trie.prototype.startsWith = function (word) {
  return !!this.traverse(word);
};


// 3
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      node = node[word[i]] = node[word[i]] || {};
      if (i === word.length - 1) node.isTerminal = true;
    }
  }

  search(word, isPrefix) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) return false;
      node = node[c];
    }
    return isPrefix || !!node.isTerminal;
  }

  startsWith(prefix) {
    return this.search(prefix, true);
  }
}