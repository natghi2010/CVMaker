
 export const validateBasicInfo = (basicInfo) => {
    let valid = true;
    if (basicInfo.name.length == 0) {
      alert("Insert name");
      valid=false;
    }

    if (basicInfo.date_of_birth.length == 0) {
      alert("Insert Date of birth");
      valid=false;
    }
    if (basicInfo.place_of_birth.length == 0) {
      alert("Insert Place of birth");
      valid=false;
    }

    if (basicInfo.gender.length == 0) {
      alert("Insert Gender");
      valid=false;
    }
    if (basicInfo.nationality.length == 0) {
      alert("Insert Nationality");
      valid=false;
    }
    if (basicInfo.address.length == 0) {
      alert("Insert Address");
      valid=false;
    }
    if (basicInfo.role.length == 0) {
      alert("Insert Role");
      valid=false;
    }
    if (basicInfo.email.length == 0) {
      alert("Insert Email");
      valid=false;
    }
    if (basicInfo.phone_number.length == 0) {
      alert("Insert Phone number");
      valid=false;
    }

    return valid;
  };