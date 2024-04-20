# README

## 実行方法

ルートディレクトリ(app/の1つ上の階層)の位置で

```
make build
make migrate
make seed
make up
```

## 環境

### プロジェクト関係
- Rails 7.1.3.2
- Ruby 3.2.2
- vite_rails 3.0.17

### 開発環境関係
- Docker Desktop 4.24.2

## トラブルシューティング
`localhost:3000`を開いてVite関連のエラーになったら

```
docker exec -it generic_wm-web-1 /bin/bash
```

もしくは

```
docker exec -it generic_wm-web-1 /bash
```

でコンテナに入り

```
npm install
```

を実行してください。
