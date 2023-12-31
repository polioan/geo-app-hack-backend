export const csvStr = `
Category,Name,Latitude,Longitude,Type,Average Rating,Average Cost in Rubles
Еда,Хинкали & Эклеры,47.227443,39.719319,Ресторан,4.6,300 - 750
Еда,Лариса жарит,47.234265,39.706815,Ресторан,5.0,1500 - 2000
Еда,Sumo,47.222275,39.706374,Ресторан и Кафе,4.8,600 - 1000
Еда,Руки Вверх!,47.222367,39.712406,Бар,4.8/5,700 - 1500
Еда,Корова,47.227119,39.713591,Бар,5,2000
Еда,Шаурма маркет,47.235036,39.712948,Кафе,4.7,200 - 300
Еда,Surf Coffee X Right Coast,47.213828,39.714546,Кофейня,4.7,340 - 600
Культура,Ростовский государственный музыкальный театр,47.22467907428565,39.732502999999994,Театр,5.0,150 - 1500
Культура,Человек в кубе,47.2210190742762,39.713027499999896,Театр,1000
Культура,Арт-пространчтво Ростов,47.223779574256845,39.72842449999999,Выставочный центр,4.2,100-350
Культура,Культурно-выставочный центр Донская казачья гвардия,47.223828074283446,39.73287149999999,Выставочнный центр,5.0,150-700
Культура,Храм святого Георгия Победоносца,47.22567657426166,39.61611749999998,Православный храм,5.0,
Культура,Ростовский кафедральный собор Рождества Пресвятой Богородицы,47.217255074266575,39.71202149999999,Православный храм,5.0,
Культура,Театр Линии,47.23137957427635,39.76005449999997,Театр,4.5,1000
Развлечения,City Boom,47.262224,39.720185,Развлекательный центр,5.0,450
Развлечения,Горизонт,47.259879,39.720168,Торговый центр,5.0,
Развлечения,Playlab,47.247307,39.711388,Боулинг-клуб,4.0,300 - 1000
Развлечения,Шери-парк,47.247307,39.711388,Аквапарк,4.8, 
Развлечения,Дрим парк,47.288955,39.713447,Развлекательный центр,4.9,
Развлечения,Андреевские бани,47.284442,39.671181,Бани,4.6,1200 - 1600
Развлечения,БурдаМоден.Городская танцплощадка,47.226846,39.714345,Ночной клуб,4.4,7500
Отели,Don-Plaza 4*,47.226117074289355,39.734326499999995,Гостиница,4.8,от 3200
Отели,Radisson Hotel Gorizont 4*,47.261482074274156,39.71934249999993,Гостиница,5.0,от 8255
Отели,Marton Сказка 2*,47.2222615742529,39.73928549999998,Гостиница,4.2,от 2390
Отели,Балконsky,47.22150907427748,39.71538099999998,Хостел,4.4,от 550
Отели,Баба Валя 2*,47.21868707427026,39.7046105,Хостел,5.0,от 700
Отели,Maxi House Hostel,47.22297157425468,39.725325499999975,Хостел,4.9,от 592
Отели,На главном,47.22056007427502,39.69346249999999,Хостел,4.2,от 650
Туристические места,Пикниковая поляна,47.289257,39.719918,Место для пикника,4.3,от 2000
Туристические места,Парк Киммерия,47.085972, 39.533571,Отдых на ферме и клуб охотников и рыболововконный клуб,3.2,от 400
Туристические места,Маныч Иваныч,47.236452, 40.281724,Турбаза,5.0,от 500
`.trim()

import csv from 'csvtojson'

export async function getCsvData(): Promise<
  {
    Category: string
    Name: string
    Latitude: string
    Longitude: string
    Type: string
    'Average Rating': string
    'Average Cost in Rubles': string
  }[]
> {
  return await csv().fromString(csvStr)
}
