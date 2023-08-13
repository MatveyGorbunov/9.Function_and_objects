const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count":  10,
        "list": {
            "id_1": "Анна",
            "id_2": "Кристина",
            "id_3": "Валерия",
            "id_4": "Мария",
            "id_5": "Маргорита",
            "id_6": "Дарья",
            "id_7": "Алена",
            "id_8": "Виктория",
            "id_9": "Василиса",
            "id_10": "Амелия"
        }
    }`,

    patronymicNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Алексеев",
            "id_2": "Викторов",
            "id_3": "Олегов",
            "id_4": "Матвеев",
            "id_5": "Даниилов",
            "id_6": "Николаев",
            "id_7": "Александров",
            "id_8": "Рафиков",
            "id_9": "Максимов",
            "id_10": "Денисов",
        }
    }`,
    jobMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Грузчик",
            "id_2": "Механизатор",
            "id_3": "Инженер-теплотехник",
            "id_4": "Шахтер",
            "id_5": "Машинист",
            "id_6": "Крановщик",
            "id_7": "Военный",
            "id_8": "Старатель",
            "id_9": "Слесарь",
            "id_10": "Токарь",
        }

    }`,
    jobFemaleJson:`{
        "count": 10,
        "list": {
            "id_1": "Визажист",
            "id_2": "Бухгалтер",
            "id_3": "Фотомодель",
            "id_4": "Стюардесса",
            "id_5": "Водитель трамвая",
            "id_6": "Воспитатель",
            "id_7": "Учительница",
            "id_8": "Домработница",
            "id_9": "Домохозяйка",
            "id_10": "Кондитер",
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE; // Метод выбора пола
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { // Метод генерации имени 
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },
   
     randomSurname: function() { // Метод генерации фамилии
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }

    },

    randomPatronymic: function() { // Метод генерации отчества
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.patronymicNameJson);
        } else {
            return this.randomValue(this.patronymicNameJson);
        }

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
       this.person.patronymic = this.randomPatronymic();
        return this.person;
    }
};
