テストまで含んだ初期プロジェクト状態
新しいtsファイルを追加した場合はtsconfig.jsonに追加すること

npm run build (= webpack実行、bundle.jsを作成する)
npm run test (= tsc後にテスト実行、coverageフォルダにテスト結果保存)
npm run clean (ビルドしたファイル等を削除、カスタマイズの余地はありそう)

---- ref: http://blog.syati.info/post/typescript_coverage/ ----

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
