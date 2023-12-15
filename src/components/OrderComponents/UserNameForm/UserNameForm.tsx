import { FC } from "react";
import { useState } from "react";
import {
  ChangeButtonUser,
  ChangeContainerName,
  ContainerUserInput,
  DataUserLabel,
  DropDownButton,
  DropDownInput,
  DropDownLabel,
  FormInput,
  StyledPhoneIcon,
  StyledUserIcon,
} from "./UserNameForm.styled";

const UserNameForm: FC = () => {
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangePhone, setOpenChangePhone] = useState(false);
  return (
    <ContainerUserInput>
      <DataUserLabel>
        <FormInput
          type="text"
          name="name"
          placeholder="Оксана Шевченко"
          open={openChangeName}
        />
        <StyledUserIcon open={openChangeName} />
        <ChangeButtonUser
          type="button"
          open={openChangeName}
          onClick={() => setOpenChangeName(!openChangeName)}
        >
          Змінити
        </ChangeButtonUser>
      </DataUserLabel>
      <ChangeContainerName open={openChangeName}>
        <DropDownLabel>
          Ім’я та Прізвище
          <DropDownInput placeholder="name" name="changeName" />
        </DropDownLabel>
        <DropDownLabel>
          Пошта
          <DropDownInput placeholder="second name" name="changeSecondName" />
        </DropDownLabel>
        <DropDownButton type="button">Зберегти</DropDownButton>
      </ChangeContainerName>
      <DataUserLabel>
        <FormInput
          type="tel"
          name="phone"
          placeholder="+38 067 777 88 99"
          open={openChangePhone}
        />
        <StyledPhoneIcon open={openChangePhone} />
        <ChangeButtonUser
          type="button"
          open={openChangePhone}
          onClick={() => setOpenChangePhone(!openChangePhone)}
        >
          Змінити
        </ChangeButtonUser>
      </DataUserLabel>
      <ChangeContainerName open={openChangePhone}>
        <DropDownLabel>
          Телефон
          <DropDownInput placeholder="phone" name="changePhone" />
        </DropDownLabel>
        <DropDownButton type="button">Зберегти</DropDownButton>
      </ChangeContainerName>
    </ContainerUserInput>
  );
};
export default UserNameForm;
