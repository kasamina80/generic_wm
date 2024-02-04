FROM ruby:3.2.2
# ベースにするイメージを指定

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs default-mysql-client vim nodejs npm
# RailsのインストールやMySQLへの接続に必要なパッケージをインストール

RUN mkdir /gwm
# コンテナ内にgwmディレクトリを作成

WORKDIR /gwm
# 作成したgwmディレクトリを作業用ディレクトリとして設定

COPY Gemfile /gwm/Gemfile
COPY Gemfile.lock /gwm/Gemfile.lock
COPY package.json /gwm/package.json
# ローカルの Gemfile と Gemfile.lock と package.json をコンテナ内のgwm配下にコピー

RUN bundle install
# コンテナ内にコピーした Gemfile の bundle install

RUN npm install

COPY . /gwm
# ローカルのgwm配下のファイルをコンテナ内のgwm配下にコピー