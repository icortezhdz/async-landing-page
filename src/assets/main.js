const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=9';
const content = null  || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c9e7670b8msh77cb2d6eae72a46p1b1fa4jsnd29748bc1169',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(API){
    const response = await fetch(API, options);
    const result = await response.json();
    return result;
}

(async() => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items
          .map(
            (video) => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md
              overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"/>
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `
          )
          .slice(0, 4)
          .join("")}
          
        `;
        console.log(view);
        content.innerHTML = view;
    }catch(error){
        throw new Error(error);
    }
})();