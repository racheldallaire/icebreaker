exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([

        knex('users').insert({first_name: "Rachie", last_name: "D", age: 23, gender: "female", lovemale: "lovemale", lovefemale: null, loveother: null, location: "45.4963839, -73.57059649999997", facebook_picture_url: "https://i.pinimg.com/736x/ca/2d/60/ca2d607942fbb74b6be5d69a1c9584af.jpg", description: "I'm Rachel Dallaire Yo! The best in the west!"}),
        knex('users').insert({first_name: "Rihanna", last_name: "Fenty", age: 30, gender: "female", lovemale: "lovemale", lovefemale: "lovefemale", loveother: "loveother",location: "13.193887, -59.54319799999996", facebook_picture_url: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/14/52/1280x1280/5499f6f5f3d86_-_hbz-rihanna-eowefx-promo.jpg?resize=480:*", description: "I'm Rihanna. Best friends with Drake from Toronto! Into skydiving."}),
        knex('users').insert({first_name: "Joe", last_name: "Biden", age: 75, gender: "male", lovemale: "lovemale", lovefemale: "lovefemale", loveother: null, location: "38.9108325, -75.52766989999998",facebook_picture_url: "https://news.northwestern.edu/assets/Stories/2018/03/_resampled/ScaleWidthWyI0ODAiXQ/biden.jpg", description: "Ex-Vice-President of the USA. Barack Obama is my bff no matter what he says!"}),
        knex('users').insert({first_name: "Barack", last_name: "Obama", age: 56, gender: "male", lovemale: null, lovefemale: null, loveother: null, location: "53.2734, -7.778320310000026",facebook_picture_url: "https://i2.wp.com/www.saucyhorse.co.uk/wp-content/uploads/2014/01/obama-selfie-bad-news-meaningful-content.jpg", description: "I was president of the United States. My wife is my best friend."}),
        knex('users').insert({first_name: "Jazz", last_name: "Dibs", age: 36, gender: "female", lovemale: "lovemale", lovefemale: "lovefemale", loveother: "loveother", location: "45.4963839, -73.57059649999997",facebook_picture_url: "http://www.eastparkdental.co.uk/perch/resources/jodentist.jpg", description: "I'm a dentist but I promise I'm not scary!"}),
        knex('users').insert({first_name: "Jill", last_name: "Fens", age: 18, gender: "other", lovemale: "lovemale", lovefemale: "lovefemale", loveother: null, location: "13.193887, -59.54319799999996",facebook_picture_url: "https://i.pinimg.com/originals/1d/6a/c1/1d6ac1fe39d39a4aeeefa9dbcda22f4c.jpg", description: "I'm an Indian actress!"}),
        knex('users').insert({first_name: "Jimbo", last_name: "Binsd", age: 42, gender: "male", lovemale: null, lovefemale: "lovefemale", loveother: null, location: "38.9108325, -75.52766989999998",facebook_picture_url: "http://www.clairedorn.com/files/gimgs/4_clairedorn_58_W6W2888_NB%20copie.jpg", description: "I love looking at myself in the mirror."}),
        knex('users').insert({first_name: "Billy", last_name: "Orack", age: 32, gender: "male",lovemale: null, lovefemale: "lovefemale", loveother: "loveother", location: "53.2734, -7.778320310000026",facebook_picture_url: "https://smedia.webcollage.net/rwvfp/wc/cp/23715569/module/hasbrous/_cp/products/1490101463593/tab-b679b38e-1f6c-4ac9-90d6-7e247380e4ae/897e475c-8ab5-41d8-92b9-2aed76c69d7b.jpg.w480.jpg", description: "I like making silly faces!"}),
        knex('users').insert({first_name: "Abie", last_name: "O'Reilly", age: 34, gender: "female",lovemale: "lovemale", lovefemale: null, loveother: null, location: "45.4963839, -73.57059649999997",facebook_picture_url: "https://ak.picdn.net/offset/photos/marryam@marryamlum.com.au/medium/photo.jpg", description: "I like making my own bracelets!"}),
        knex('users').insert({first_name: "Jason", last_name: "DeFern", age: 32, gender: "other",lovemale: "lovemale", lovefemale: "lovefemale", loveother: null, location: "13.193887, -59.54319799999996",facebook_picture_url: "https://www.uofmhealth.org/sites/default/files/styles/large/public/general/featured/stock%20woman.jpg?itok=Sq54bZ7F", description: "I'm younger than I look!"}),
        knex('users').insert({first_name: "Marc", last_name: "Chevier", age: 18, gender: "male", lovemale: "lovemale", lovefemale: null, loveother:null,location: "38.9108325, -75.52766989999998",facebook_picture_url: "https://i1.wp.com/www.out-of-stock.net/wp-content/uploads/2016/07/Depositphotos_99414918_m-2015.jpg?resize=480%2C480", description: "I wrapped myself in dental floss. HELP ME"}),
        knex('users').insert({first_name: "Denise", last_name: "Gagnon", age: 58, gender: "female", lovemale: null, lovefemale:null, loveother: null, location: "45.4963839, -73.57059649999997",facebook_picture_url: "https://i.pinimg.com/736x/0e/77/3b/0e773b5f0bf9e4141465f6942db10096--girls-on-bicycles-girls-on-bikes.jpg", description: "Long bike rides on the beach?"}),
        knex('users').insert({first_name: "Julien", last_name: "Leblanc", age: 18, gender: "female", lovemale: null, lovefemale:null, loveother: null, location: "13.193887, -59.54319799999996",facebook_picture_url: "https://thetranslationcompany.com/wp-content/uploads/2015/01/small-translator1.jpg", description: "Let's code together!"}),
        knex('users').insert({first_name: "Gabby", last_name: "Desousa", age: 42, gender: "male", lovemale: null, lovefemale:null, loveother: null, location: "38.9108325, -75.52766989999998",facebook_picture_url: "https://i.pinimg.com/originals/d8/b8/71/d8b8711d5303e0f068544347e65d1334.jpg", description: "I'm not an actor."}),
        knex('users').insert({first_name: "Buffy", last_name: "Summers", age: 72, gender: "female",lovemale: null, lovefemale:null, loveother: null,  location: "45.4963839, -73.57059649999997",facebook_picture_url: "https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a050a173d62_-_cos-03-beautiful-woman-de.jpg?resize=480:*", description: "I can't see anything. A skydiving enthusiast."}),
        knex('users').insert({first_name: "Xander", last_name: "Harris", age: 18, gender: "other", lovemale: null, lovefemale:null, loveother: null, location: "13.193887, -59.54319799999996",facebook_picture_url: "https://cdn.shopify.com/s/files/1/1535/5361/products/Handmade_Small_Leather_Satchel_Women_s_Fashion_Handbags_Shoulder_Bag_AK22_41_large.jpg?v=1519873852", description: "This is not an ad. The leather is just so soft!"}),
        knex('users').insert({first_name: "Rupert", last_name: "Giles", age: 55, gender: "male",lovemale: null, lovefemale:null, loveother: null,  location: "38.9108325, -75.52766989999998",facebook_picture_url: "http://elcome.com/wp-content/uploads/2014/07/Jackson-Mathews-669-480x480.jpg", description: "Talk to me about my moustache."}),
        knex('users').insert({first_name: "Tom", last_name: "Smith", age: 28, gender: "female",lovemale: null, lovefemale:null, loveother: null,  location: "45.4963839, -73.57059649999997",facebook_picture_url: "https://s3.amazonaws.com/gigsalad_media/p/pure_blind_faith_by_lisa_willice_silva_o/59e324530e332_480_sq", description: "Life is a highway."}),
        knex('users').insert({first_name: "Alex", last_name: "Cane", age: 24, gender: "female",lovemale: null, lovefemale:null, loveother: null,  location: "13.193887, -59.54319799999996",facebook_picture_url: "https://cdn.shopify.com/s/files/1/2216/7827/files/Categories11_large.jpg?v=1506957242", description: "I am terribly allergic to pollen..."}),
        knex('users').insert({first_name: "Juan", last_name: "DeMarco", age: 35, gender: "male", lovemale: null, lovefemale:null, loveother: null, location: "38.9108325, -75.52766989999998",facebook_picture_url: "https://www.telegraph.co.uk/content/dam/beauty/2016/05/26/jon_snow_trans_NvBQzQNjv4BqkemBzas3KIpBLUMocgoXossDv3qRJj3QU9cUdGaCzBA.jpg?imwidth=450", description: "I know nothing."})

      ]);
    });
};