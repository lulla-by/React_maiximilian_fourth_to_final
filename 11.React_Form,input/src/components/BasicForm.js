import useInput from "../hooks/use-input";

const isNotEmpty = value=>value.trim() !== "";
const isEmail = value => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChnageHandler,
    inputBlurHandeler: firstNameBlurHandeler,
    reset: firstNameReset,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChnageHandler,
    inputBlurHandeler: lastNameBlurHandeler,
    reset: lastNameReset,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChnageHandler,
    inputBlurHandeler: emailBlurHandeler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    firstNameReset()
    lastNameReset()
    emailReset()
  };

  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameChnageHandler}
            onBlur={firstNameBlurHandeler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">please enter your first name</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="lsast-name"
            onChange={lastNameChnageHandler}
            onBlur={lastNameBlurHandeler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">please enter your last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChnageHandler}
          onBlur={emailBlurHandeler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">please enter your email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
