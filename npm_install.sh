## webpackまで
npm install tsd -g --save
npm install typescript -g --save
npm install webpack -g --save
npm install webpack-cli -g --save

# webpack のインストールは、step 0 でインストールしたものとする
# typescript ファイルを処理できるように以下の webpack 用の loader をプロジェクトのライブラリに追加する
npm install ts-loader --save

# step 1 ./ で以下のコマンドを実行
## プロジェクトで利用するライブラリのインストール
npm install typescript --save
npm install jquery --save
## TypeScript で利用するにはもちろん定義が必要なので、tsd で jquery をインストール
tsd install jquery --save

## test用
#phantomjs用(ubuntu or WSL)
sudo apt-get install fontconfig
#test用モジュール群
npm install -g karma karma-webpack karma-jasmine jasmine jasmine-core karma-phantomjs-launcher phantomjs-prebuilt