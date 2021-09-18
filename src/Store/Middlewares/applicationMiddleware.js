import { applicantInformationSheema } from '../../Helpers/Validator/validator';
import * as yup from 'yup';
export const applicantInformationMiddleware = async (data, next) => {


        try {
                console.log(data)
                await applicantInformationSheema.strict().validate(data)
                        .then(success => {
                                console.log(success)
                                return dispatch => {

                                }
                        })
                        .catch(err => {
                                console.log(err)
                        })
        }
        catch (err) {
                console.log(err)
                next(err)
        }

        // }

}
