type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

const form: Params = {
  email: 'ukr@ukr.net',
  firstName: 'Yuri',
  lastName: 'Ruby',
  phone: '555-55-55',
};

console.log(form);
