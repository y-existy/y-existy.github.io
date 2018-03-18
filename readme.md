# これ何？

- bitcoin address生成のお試しプロジェクト
- link: <https://y-existy.github.io/app/index>

- テストまで含んだ初期プロジェクト状態
新しいtsファイルを追加した場合はtsconfig.jsonに追加すること

参考1:
bitcore-libとbitcore-explorersで More than one instance of ~ という
エラーが発生する場合

```bash
target: node_modules/bitcore-explorers/node_modules/bitcore-lib/index.js

bitcore.versionGuard = function(version) {

Change it to:

bitcore.versionGuard = function(version) { return;
```

参考2：
macでの環境構築
- bitcoreのnpm install時にエラーが出る場合の対処法

```bash
brew install zmq
# 上記でinstallした版を記録しておく
# 下記をbashprofile等に追加
export PKG_CONFIG_PATH=/usr/local/Cellar/zeromq/4.x.x/lib/pkgconfig/
npm install zmq
```

- build等

```bash
#(= webpack実行、bundle.jsを作成する)
npm run build
# (= tsc後にテスト実行)
npm run test
#  (ビルドしたファイル等を削除、カスタマイズの余地はありそう)
npm run clean
```

----

## ref: <http://blog.syati.info/post/typescript_coverage/>

# 011 test sample

- Test framework
  - mocha
- Coverage
  - istanbul
  - remap-istanbul

## Getting started

```sh
# install library
$ npm install

# Run test
$ npm test

# Open coverage/html-report/index.html
```


##  Reference

https://github.com/jonnyreeves/hello-ts-mocha
