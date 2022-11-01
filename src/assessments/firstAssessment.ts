import https from "https";

runAssessmentHandler().then(console.log).catch(console.log);

interface HTTPServiceResponseProps {
  isSuccess: boolean;
  result: any;
  message?: string;
}

async function runAssessmentHandler() {
  const response = await httpService("https://rickandmortyapi.com/api/episode");

  if (!response.isSuccess) {
    return `Error occured while fetching episodes. error:${response.message}`;
  }

  const episodes = response.result.results;

  for await (const episode of episodes) {
    const characterIds = extractCharacterIds(episode.characters);
    episode.characters = await getCharacters(characterIds);
  }

  return episodes;
}

async function httpService(url: string): Promise<HTTPServiceResponseProps> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          return resolve({ isSuccess: true, result: JSON.parse(data) });
        });
      })
      .on("error", (error) => {
        return reject({
          isSuccess: false,
          result: error,
          message: error.message,
        });
      });
  });
}

function extractCharacterIds(characters: string[]) {
  return characters.map((character) => {
    const characterId = character.split("/").reverse()[0];

    return characterId;
  });
}

async function getCharacters(characterIds: string[]) {
  const stringifiedIds = JSON.stringify(characterIds);
  const response = await httpService(
    `https://rickandmortyapi.com/api/character/${stringifiedIds}`
  );

  if (!response.isSuccess) {
    console.log(
      `Error occured while fetching characters. error:${response.message}`
    );

    return [];
  }

  return response.result;
}
