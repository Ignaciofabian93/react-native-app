type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  notes?: string;
};

type ParasiteControl = {
  name: string;
  date: string;
  price?: number;
  nextControlDate?: string;
};

type Surgery = {
  name: string;
  date: string;
  doctor?: string;
  veterinaryCenter?: string;
  price?: number;
  checkDate?: string;
};

type Vaccination = {
  name: string;
  date: string;
  veterinaryCenter?: string;
  price?: number;
  nextShotDate?: string;
};

type MedicalHistory = {
  lastCheck?: string;
  surgeries?: Surgery[];
  chronicDiseases?: string[];
  vaccinations?: Vaccination[];
  allergies?: string[];
  medications?: Medication[];
  parasiteControl?: ParasiteControl;
};

export type Pet = {
  id: number;
  name: string;
  breed: string;
  birthday: string;
  weight: number;
  photo: string;
  medicalHistory?: MedicalHistory;
};
