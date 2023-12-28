import { FC, useState } from "react";

import {
  PerdonalDataButton,
  PerdonalDataButtonBox,
  PerdonalDataForm,
  PerdonalDataInput,
  PerdonalDataInputBox,
  PerdonalDataPopUpBox,
  PerdonalDataSubmitBtn,
  PerdonalDataFiEyeOff,
  PerdonalDataText,
  PerdonalDataTitle,
  PerdonalDataUserDataBox,
  PerdonalDataBiLock,
  PerdonalDataBiUser,
  PerdonalDataBsTelephone,
  PerdonalDataTbTruckDelivery,
  PerdonalDataIoIosArrowDown,
  PerdonalDataInputPasswordBox,
  PerdonalDataInput1,
  PerdonalDataIoIosArrowUp,
} from "./PersonalData.styled";

const PersonalData: FC = () => {
  type DropDownState = {
    [key: string]: boolean;
  };

  const [dropDown, setDropDown] = useState<DropDownState>({
    userData: false,
    contacts: false,
    adress: false,
    pass: false,
  });

  const handleDropDown = (elem: any) => {
    setDropDown(prevStates => ({
      ...prevStates,
      [elem]: !prevStates[elem],
    }));
  };

  return (
    <>
      <div>
        <PerdonalDataTitle>Особисті дані</PerdonalDataTitle>
        <PerdonalDataUserDataBox>
          <PerdonalDataButton
            onClick={() => handleDropDown("userData")}
            className={dropDown.userData ? "active" : ""}
          >
            <PerdonalDataButtonBox>
              <PerdonalDataBiUser
                className={dropDown.userData ? "active" : ""}
              />
              <span>Особисті дані</span>
            </PerdonalDataButtonBox>

            <button>
              {dropDown.userData ? (
                <PerdonalDataIoIosArrowDown />
              ) : (
                <PerdonalDataIoIosArrowUp />
              )}
            </button>
          </PerdonalDataButton>

          <PerdonalDataPopUpBox className={dropDown.userData ? "active" : ""}>
            <PerdonalDataForm>
              <PerdonalDataInputBox>
                <PerdonalDataText>Прізвище</PerdonalDataText>
                <PerdonalDataInput type="text" />
              </PerdonalDataInputBox>
              <PerdonalDataInputBox>
                <PerdonalDataText>Ім'я</PerdonalDataText>
                <PerdonalDataInput type="text" />
              </PerdonalDataInputBox>
            </PerdonalDataForm>

            <PerdonalDataSubmitBtn>Зберегти</PerdonalDataSubmitBtn>
          </PerdonalDataPopUpBox>

          <PerdonalDataButton
            onClick={() => handleDropDown("contacts")}
            className={dropDown.contacts ? "active" : ""}
          >
            <PerdonalDataButtonBox>
              <PerdonalDataBsTelephone
                className={dropDown.contacts ? "active" : ""}
              />
              <span>Контакти</span>
            </PerdonalDataButtonBox>
            <button>
              {dropDown.contacts ? (
                <PerdonalDataIoIosArrowDown />
              ) : (
                <PerdonalDataIoIosArrowUp />
              )}
            </button>
          </PerdonalDataButton>

          <PerdonalDataPopUpBox className={dropDown.contacts ? "active" : ""}>
            <PerdonalDataForm>
              <PerdonalDataInputBox>
                <PerdonalDataText>Номер телефону</PerdonalDataText>
                <PerdonalDataInput type="tel" />
              </PerdonalDataInputBox>
              <PerdonalDataInputBox>
                <PerdonalDataText>Пошта</PerdonalDataText>
                <PerdonalDataInput type="email" />
              </PerdonalDataInputBox>
            </PerdonalDataForm>

            <PerdonalDataSubmitBtn>Зберегти</PerdonalDataSubmitBtn>
          </PerdonalDataPopUpBox>
          <PerdonalDataButton
            onClick={() => handleDropDown("adress")}
            className={dropDown.adress ? "active" : ""}
          >
            <PerdonalDataButtonBox>
              <PerdonalDataTbTruckDelivery
                className={dropDown.adress ? "active" : ""}
              />
              <span>Адреса доставки</span>
            </PerdonalDataButtonBox>
            <button>
              {dropDown.adress ? (
                <PerdonalDataIoIosArrowDown />
              ) : (
                <PerdonalDataIoIosArrowUp />
              )}
            </button>
          </PerdonalDataButton>
          <PerdonalDataPopUpBox className={dropDown.adress ? "active" : ""}>
            <PerdonalDataForm>
              <PerdonalDataInputBox>
                <PerdonalDataText>Місто</PerdonalDataText>
                <PerdonalDataInput type="text" />
              </PerdonalDataInputBox>
              <PerdonalDataInputBox>
                <PerdonalDataText>Будинок</PerdonalDataText>
                <PerdonalDataInput1 type="text" />
              </PerdonalDataInputBox>
            </PerdonalDataForm>
            <PerdonalDataForm>
              <PerdonalDataInputBox>
                <PerdonalDataText>Вулиця</PerdonalDataText>
                <PerdonalDataInput type="text" />
              </PerdonalDataInputBox>
              <PerdonalDataInputBox>
                <PerdonalDataText>Квартира</PerdonalDataText>
                <PerdonalDataInput1 type="text" />
              </PerdonalDataInputBox>
            </PerdonalDataForm>

            <PerdonalDataSubmitBtn>Зберегти</PerdonalDataSubmitBtn>
          </PerdonalDataPopUpBox>
          <PerdonalDataButton
            onClick={() => handleDropDown("pass")}
            className={dropDown.pass ? "active" : ""}
          >
            <PerdonalDataButtonBox>
              <PerdonalDataBiLock className={dropDown.pass ? "active" : ""} />
              <span>Пароль</span>
            </PerdonalDataButtonBox>

            <button>
              {dropDown.pass ? (
                <PerdonalDataIoIosArrowDown />
              ) : (
                <PerdonalDataIoIosArrowUp />
              )}
            </button>
          </PerdonalDataButton>
          <PerdonalDataPopUpBox className={dropDown.pass ? "active" : ""}>
            <PerdonalDataForm>
              <PerdonalDataInputBox>
                <PerdonalDataText>Поточний пароль</PerdonalDataText>
                <PerdonalDataInputPasswordBox>
                  <PerdonalDataInput type="password" />
                  <button>
                    <PerdonalDataFiEyeOff />
                  </button>
                </PerdonalDataInputPasswordBox>
              </PerdonalDataInputBox>
              <PerdonalDataInputBox>
                <PerdonalDataText>Новий пароль</PerdonalDataText>
                <PerdonalDataInputPasswordBox>
                  <PerdonalDataInput type="password" />
                  <button>
                    <PerdonalDataFiEyeOff />
                  </button>
                </PerdonalDataInputPasswordBox>
              </PerdonalDataInputBox>
            </PerdonalDataForm>

            <PerdonalDataSubmitBtn>Зберегти</PerdonalDataSubmitBtn>
          </PerdonalDataPopUpBox>
        </PerdonalDataUserDataBox>
      </div>
    </>
  );
};

export default PersonalData;
