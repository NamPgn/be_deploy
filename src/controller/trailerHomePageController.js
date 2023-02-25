import { editTrailerHomePageUrlSevices, getTrailerHomePageUrlSevices, getTrailerUrlSevices } from "../services/trailerHomePageSevices";

export const getUrlTrailerControllers = async (req, res) => {
  try {
    const data = await getTrailerHomePageUrlSevices();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}


export const editTrailerHomePageUrlController = async (req, res) => {
  try {
    const url = req.body;
    const { _id } = req.params;
    const data = await editTrailerHomePageUrlSevices(_id, url);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

export const getTrailerController = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await getTrailerUrlSevices(_id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}