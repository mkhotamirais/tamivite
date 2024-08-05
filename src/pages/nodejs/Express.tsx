import { Container } from "@/components/wrapper";

export default function Express() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="p-3">
          <h1 className="text-xl font-bold">Express</h1>
          <p>Express dengan typescript</p>
          <ul className="list-inside list-disc">
            <li>buka terminal `mkdir my-folder` lalu `cd my-folder`</li>
            <li>npm init -y</li>
            <li>code . (vs code akan terbuka)</li>
            <li>cek nodejs dan typescrypt `node -v` dan typscript `tsc -v`</li>
            <li>jika typscript belum diinstall, install dulu `npm i -g typescript`</li>
            <li>tsc --init (muncul tsconfig.json) setting "allowJs": true; "outDir": "./build"</li>
            <li>
              `tsc --init` (muncul file tsconfig.json) ubah settingnya (selain yang required itu opsional)
              <pre className="text-sm">{`
{
  "compilerOptions": {
    "allowJs": true [required]
    "module": "NodeNext",
    "moduleResulution": "node",
    "baseUrl": "src",
    "rootDir": "./src", [required]
    "outDir": "./dist", (atau "./build" atau lainnya) [required]
    "sourceMap": true,
    "noImplicitAny": true,
  },
  "include": ["src/**/*"]
}
`}</pre>
            </li>
            <li>npm i -D typescript ts-node nodemon</li>
            <li>
              (opsional) buat file nodemon.json, lalu isi dengan code berikut:
              <pre className="text-sm">{`
{
  "watch": ["src"],
  "ext": ".ts, .js",
  "exec": "ts-node ./src/index.ts"
}
`}</pre>
            </li>
            <li>buat file src/index.ts isi dengan console.log('hello')</li>
            <li>
              buka package.json, lalu isi dengan code berikut:
              <pre className="text-sm">{`
{
  // ...
  "scripts": {
    // ...
    "start": "nodemon", (npm start) [atau berikut]
    "dev": "nodemon src/index.ts" (npm run dev)
    // ...
  }
  // ...
}
`}</pre>
            </li>
            <li>`npm i express` dan `npm i -D @types/express</li>
            <li>`npm start` mulai jalankan aplikasi</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
