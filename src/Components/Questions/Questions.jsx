import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import "./Questions.css";
// import { CardActions } from "@mui/material";

const TextAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Questions() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={TextAnimation}
      custom={1}
      className='news'
      id='questions'
    >
      <div className='container' id='news'>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          variants={TextAnimation}
          custom={1}
          className='news__heading text-center mb-3'
        >
          Markazimizga eng kop beriladigan savollarga javoblar
        </motion.h2>

        <div className='d-flex justify-content-center'>
          <div className='about__devider mb-4'></div>
        </div>

        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              Sizlarda o`quvchilarning qabul qilish yoshi nechchi?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Biz o`quvchilarning qabul qilish yoshini cheklamaganmiz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Oqish uchun imtihon qilasizlarmi?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ha albatta, bizda kirish imtihonlari mavjud. Ulardan o`tgan
              oquvchilarni oqitamiz
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Online o`qish imkoni bormi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ha bizda online talim yolga qoyilgan</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              Sizlarda o`quvchilarning qabul qilish yoshi nechchi?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Biz o`quvchilarning qabul qilish yoshini cheklamaganmiz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Oqish uchun imtihon qilasizlarmi?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ha albatta, bizda kirish imtihonlari mavjud. Ulardan o`tgan
              oquvchilarni oqitamiz
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='news__card'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Online o`qish imkoni bormi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ha bizda online talim yolga qoyilgan</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </motion.div>
  );
}
