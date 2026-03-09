function persistStorage(callback) {
  try {
    navigator.storage.persist().then(persistent => {
      callback(persistent);
    });
  } catch (error) {
    callback(false);
  }
}

function getRoot(callback) {
  navigator.storage.getDirectory().then(root => {
    callback(root);
  });
}

function getQuota(callback) {
  navigator.storage.estimate().then(estimate => {
    callback(estimate);
  });
}

function getOrCreateFile(parent, name, callback) {
  parent.getFileHandle(name, { create: true }).then(fileHandle => {
    callback(fileHandle);
  });
}

function getFile(parent, name, callback) {
  parent.getFileHandle(name).then(fileHandle => {
    callback(fileHandle);
  });
}

function getOrCreateDirectory(parent, name, callback) {
  parent.getDirectoryHandle(name, { create: true }).then(dirHandle => {
    callback(dirHandle);
  });
}

function getDirectory(parent, name, callback) {
  parent.getDirectoryHandle(name).then(dirHandle => {
    callback(dirHandle);
  });
}

