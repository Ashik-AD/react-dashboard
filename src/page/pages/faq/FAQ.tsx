import Box from "../../../components/box/Box";
import { FandQAPI } from "../../../components/faq/type";
import useFetch from "../../../hooks/useFetch";
import FAQMain from "./content/FAQMain";

import FAQFooter from "../../../components/faq/FAQFooter";
const FAQ = () => {
  const { data, loading } = useFetch<FandQAPI>("/faq/");
  if (!data || loading) return <></>;
  return (
    <Box display="flex" flexDirection="column" space={1.6}>
      <FAQMain fanQ={data} />
      <FAQFooter />
    </Box>
  );
};
export default FAQ;
