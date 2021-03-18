import React, {useCallback, useEffect, useState} from "react";
import tgPhoto from "./tgPhoto.svg";
import './registrationForm.scss';
import Checkbox from "../CheckBox/Checkbox";
import MultiInput from "../MultiInput/MultiInput";
import RadioBtnGender from "../RadioBtnGender/RadioBtnGender";
import {
    getUniversities,
    getFaculties,
    getSpecialities,
    getRegions,
    Courses,
    University,
    Region,
    Faculty,
    Speciality,
} from "../../../../Helpers/api";
import DropDown from "../../../../Components/DropDown";
import Input from "../../../../Components/Input";


type FormProps = {};
type CoursesType = { id: number; title: string };

export default function RegistrationForm() {
    const [region, setRegion] = useState<Region>();
    const [university, setUniversity] = useState<University>();
    const [faculty, setFaculty] = useState<Faculty>();
    const [speciality, setSpeciality] = useState<Speciality>();
    const [course, setCourse] = useState<CoursesType>();
    const [nameSurname, setNameSurname] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        return () => {
        };
    });

    function onInputErrorHandler<T>(item: T): boolean {
        console.log(item);
        //    return !item && isSubmitted ? true : false;
        return false
    }

    const [selectOption, setSelectOption] = useState('')
    const [aboutMyself, setAboutMyself] = useState('');
    const [state, setState] = React.useState({
        tg: false,
        politic: false
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.checked;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const [error, serError] = React.useState({
            nameSurname: false,
            selectOption: false,
            region: false,
            university: false,
            faculty: false,
            speciality: false,
            course: false,
        }
    )

    function SubmitStates(event: any) {
        let sumbitready = true;
        event.preventDefault();
        const dataPost = {
            nameSurname: nameSurname,
            selectOption: selectOption,
            region: region,
            university: university,
            faculty: faculty,
            speciality: speciality,
            course: course,
            aboutMyself: aboutMyself,
            tg: state.tg,
            politic: state.politic
        }
        Object.entries(dataPost).map(([key, value]) => {
            if ('aboutMyself' !== key) {
                if (value == "" || value === undefined || value == false) {
                    sumbitready = false;
                    serError(prevUser => ({...prevUser, [key]: true}));
                } else {
                    serError(prevUser => ({...prevUser, [key]: false}));
                }
            }
        });

        if (sumbitready) {
            console.log("ready To send ");
        }
    }

    return (
        <div className={`SignForm`}>
            <form>
                <div className={`flName`}>
                    <Input
                        value={nameSurname}
                        error={error.nameSurname}
                        placeholder="Ім’я, Прізвище"
                        onChangeHandler={(changedVal: string) => {
                            setNameSurname(changedVal);
                        }}
                    />
                </div>
                <RadioBtnGender
                    selectOption={selectOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSelectOption(event.target.value);
                    }}/>
                <div className={`regionBlock`}>
                    <DropDown<Region>
                        placeholder="Регіон"
                        value={region}
                        inputError={error.region}
                        onChange={setRegion}
                        request={useCallback(
                            (count, offset, query) =>
                                getRegions().then((res: any) => res?.regions),
                            []
                        )}
                    />
                </div>
                <div className={`universityBlock`}>
                    <DropDown<University>
                        placeholder="Вищий навчальний заклад"
                        value={university}
                        inputError={error.university}
                        onChange={setUniversity}
                        request={useCallback(
                            (count, offset, query) =>
                                getUniversities(query, region?.id, count, offset),
                            [region]
                        )}
                    />
                </div>
                <div className={`facultyBlock`}>
                    {
                        <DropDown<Faculty>
                            placeholder="Факультет"
                            value={faculty}
                            inputError={error.faculty}
                            onChange={setFaculty}
                            request={useCallback(
                                (count, offset, query) =>
                                    getFaculties(query, university?.id, count, offset),
                                [university]
                            )}
                        />
                    }
                </div>
                <div className={`specialityCourseBlock`}>
                    <DropDown<Speciality>
                        placeholder="Спеціальність"
                        value={speciality}
                        inputError={error.speciality}
                        onChange={setSpeciality}
                        request={useCallback(
                            (count, offset, query) =>
                                getSpecialities(query, university?.id, count, offset),
                            [university]
                        )}
                    />
                    <DropDown<CoursesType>
                        placeholder="Курс"
                        value={course}
                        inputError={error.course}
                        onChange={setCourse}
                        request={useCallback(
                            (count, offset, query) =>
                                new Promise<CoursesType[]>((resolve, reject) => {
                                    resolve(Courses);
                                }),
                            []
                        )}
                    />
                </div>
                <MultiInput
                    name={`textValue`}
                    value={aboutMyself}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setAboutMyself(event.target.value);
                    }}
                />
                <div className="checkBoxBlock">
                    <Checkbox
                        label="tg"
                        value={`Додати моє фото з Telegram`}
                        checked={state.tg}
                        onChange={handleChange}
                    />
                    <Checkbox
                        label="politic"
                        value={`Погоджуюся з`}
                        tag={<a href={`#`}>Політикою конфіденційності</a>}
                        checked={state.politic}
                        onChange={handleChange}
                    />
                </div>
                <p className={`useTelegram`}>
                    Ми використовуем Telegram для зв’язку між абітурієнтом та студентом,
                    тому просимо тебе підтвердити свій аккаунт через Telegram-бота
                </p>
                <div className="authTelegram">
                    <button onClick={SubmitStates}>
                        <img src={tgPhoto} alt="tgPhoto"/>
                        <span>Підтвердити Telegram та зареєструватись</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
