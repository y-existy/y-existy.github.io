# 適当なもの置き場
- ほぼ自分用のメモ

## 麻雀計算表
- link: <https://y-existy.github.io/mahjong_calc/index>
- 自分の成績をcsvで保管するために作成。
- redisに保管することも可能で、hash付きURLを発行し多人数で共有することも可能にした。が、当然github上では動かない。
- csvDL機能は健在なので、使えなくもない

## bitcoin アドレス作成
- link: <https://y-existy.github.io/bitcoin-address/app/index>
- bitcoin address生成のお試しプロジェクト. 詳細は下記.
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

参考3:
qrcodeを表示させるために以下を参考にした
ref: <https://devadjust.exblog.jp/26233640/>

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
