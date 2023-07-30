//わざとエラー(及び警告)を出す
//1.変数名がcamelCaseでない
//2.文字列がシングルクォーテーションで囲まれていない(警告)
//3.console.logを残している
//4.セミコロンを省略している

//自動修正を実行し、エラーのうち2.と4.が修正されるのを確認
// npx eslint --fix src/
//手動で変数名をcamelCaseに修正し、console.logを削除
// 最後に、npx eslint src/を実行し、エラーが消えていることを確認

export const helloWorld = 'Hello World';
//console.log(hello_world); //コメントアウトでもエラーは消える
