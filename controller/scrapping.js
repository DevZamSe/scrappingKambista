const scrapeIt = require("scrape-it");

class Scrapping{

    async scrape(req, res) {
        const scrapeResult = await scrapeIt('https://kambista.com/?gclid=CjwKCAjw_Y_8BRBiEiwA5MCBJu8o8yTEsQYRs0J0duEdnVaXQeLhgusUMUgBh4c7pLm9I49yxm7R9RoCZZMQAvD_BwE', {
            presentations: {
                listItem: 'km_calc',
//                listItem: 'deck-filters-tags-list',
//                listItem: 'deck-filters-tag focus-outline',
                data: {
                    title: 'km_calc-encabezado',
//                    description: 'valventa'
                }
            }
        });

        console.log(scrapeResult);
        res.send({success: true})
        
    }
}

module.exports = new Scrapping();