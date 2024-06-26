function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
    res.header('Access-Control-Allow-Origin', '*'); // Открываем доступ всем
}
const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
  ];
  module.exports= cors