export default function MysV1Home() {
  return (
    <div>
      <ul className="list-inside list-disc">
        <li>npm init -y</li>
        <li>npm i express dotenv mysql2 sequelize cors</li>
        <li>
          tambahkan pada package.json:
          <pre>{`
{
 ...
 "type": "module"
 "script": {
  ...
  "dev": "nodemon index.js"
 }
 ...
}
`}</pre>
        </li>
        <li>`npm i -g nodemon` / `npm i -D nodemon` / `nodemon -v`</li>
      </ul>
    </div>
  );
}
