function hasIterator(obj) {
    return obj && typeof obj[Symbol.iterator] === "function";
}