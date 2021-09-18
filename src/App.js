import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ApplicantInformationPage from './Pages/ApplicatnInformationPage';
import ConatactInformationPage from './Pages/contactInformationPage'
import MedicareInformationPage from './Pages/MediacreInformationPage';
import EligibilityQuestionsPage from './Pages/EligibilityQuestionsPage'
import ApplicantReviewPage from './Pages/ApplicantReviewPage';
import ApplicantEfectiveDatePage from './Pages/ApplicantEffectiveDatePage';
import ApplicantSignaturePage from './Pages/ApplicantsignaturePage';
import EnrollmentCompletedPage from './Pages/EnrollmentCompletedPage';
function App() {
  return <>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/applicant-information">
          <ApplicantInformationPage />
        </Route>

        <Route path="/contact-information">
          <ConatactInformationPage />
        </Route>

        <Route path="/medicare-information">
          <MedicareInformationPage />
        </Route>

        <Route path="/eligibility-questions">
            <EligibilityQuestionsPage />
        </Route>

        <Route path="/applicant-review">
          <ApplicantReviewPage />
        </Route>  

        <Route path="/applicant-effective-date">
          <ApplicantEfectiveDatePage />
        </Route>

        <Route path="/applicant-signature">
          <ApplicantSignaturePage />
        </Route>

        <Route path="/enrollment-completed">
          <EnrollmentCompletedPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
}

export default App;
