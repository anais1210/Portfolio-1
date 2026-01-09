import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="w-full flex items-start">
      {/* Colonne gauche */}
      {/* <div className="flex items-center justify-center w-1/4 flex-shrink-0  text-3xl">
        Skills
      </div> */}

      {/* Colonne droite */}
      <div className="flex-grow space-y-4 pl-6 m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Première colonne */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-10 m-2"
                width={40}
                height={40}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="h-10 w-10 m-2"
                width={40}
                height={40}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                alt=""
                className="w-10 m-2"
                width={40}
                height={40}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-16 m-2"
                width={40}
                height={40}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                alt=""
                className="w-12 m-2"
                width={40}
                height={40}
              />
              <img
                className="w-12 m-2"
                width={40}
                height={40}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              />
            </div>
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Blockchain Development
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"
                  alt=""
                  className="w-10 m-3"
                  width={40}
                  height={40}
                />
                <span className="text-xs text-gray-700">Solidity</span>
              </div>
              <Image
                src="/imgs/ipfs.png"
                alt=""
                className="h-10 w-10 m-3"
                width={40}
                height={40}
              />
              <img
                className="w-20 m-3"
                width={60}
                height={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-plain-wordmark.svg"
              />
            </div>
          </div>

          {/* Première colonne - Deuxieme ligne */}

          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Framework & Tools
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Express.js"
                  className="h-10 w-10 m-3"
                  width={40}
                  height={40}
                />
                <span className="text-gray-700 text-xs">ExpressJs</span>
              </div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                className="w-16 m-3"
                width={40}
                height={40}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                alt="github"
                className="w-16 m-2"
                width={35}
                height={35}
              />
              <img
                className="w-16 m-2"
                width={35}
                height={35}
                alt="postman"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              />
            </div>
          </div>

          {/* Deuxième colonne - Partie 2 */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700">Databases</h3>
            <div className="flex flex-wrap gap-4 items-center">
              {/* icons */}
              <img
                alt=""
                className=" w-18 m-3"
                width={60}
                height={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                alt=""
                className=" w-18 m-3"
                width={60}
                height={60}
              />
              <img
                className=" w-18 m-3"
                width={60}
                height={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
              />
              <img
                className="h-35 w-18 m-3"
                width={60}
                height={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              />
              <img
                className="w-15 m-3"
                width={60}
                height={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
