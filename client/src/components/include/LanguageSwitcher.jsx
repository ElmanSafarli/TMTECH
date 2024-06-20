import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


// Images
import enImg from '../../assets/en.png';
import ruImg from '../../assets/ru.png';
import kaImg from '../../assets/georgia.png';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(enImg);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        switch (savedLanguage) {
            case 'ru':
                setSelectedImg(ruImg);
                i18n.changeLanguage('ru');
                break;
            case 'ka':
                setSelectedImg(kaImg);
                i18n.changeLanguage('ka');
                break;
            default:
                setSelectedImg(enImg);
                i18n.changeLanguage('en');
        }
    }, [i18n]);

    const changeLanguage = (language) => {
        let img;
        switch (language) {
            case 'ru':
                img = ruImg;
                break;
            case 'ka':
                img = kaImg;
                break;
            default:
                img = enImg;
        }
        setSelectedImg(img);
        i18n.changeLanguage(language);

        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('selectedImage', img);
    };

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language) => {
        changeLanguage(language);
        handleDropdownToggle();
    };

    return (
        <div className="language-switcher dropdown">
            <div className="caption" onClick={handleDropdownToggle}>
                <img src={selectedImg} alt="Language" />
                <span>{i18n.language.toUpperCase()}</span>
            </div>
            <div className={`list ${isOpen ? 'open-lg' : ''}`}>
                <div className="item" onClick={() => handleLanguageSelect('en')}>
                    <img src={enImg} alt="EN" />
                    <span>EN</span>
                </div>
                <div className="item" onClick={() => handleLanguageSelect('ru')}>
                    <img src={ruImg} alt="RU" />
                    <span>RU</span>
                </div>
                <div className="item" onClick={() => handleLanguageSelect('ka')}>
                    <img src={kaImg} alt="KA" />
                    <span>KA</span>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
