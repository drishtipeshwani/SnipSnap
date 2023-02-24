import React from "react";
import {  Refine} from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider } from "@pankod/refine-supabase";
import Dashboard from './pages/Dashboard'
import { supabaseClient } from './utility/supabaseClient';
import CustomLayout from 'components/CustomLayout'
import {SnippetCreate} from './pages/snippets/SnippetCreate'
import {SnippetEdit} from './pages/snippets/SnippetEdit'
import {SnippetList} from './pages/snippets/SnippetList'
import {SnippetShow} from './pages/snippets/SnippetShow'

function App() {


  


  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        notificationProvider={notificationProvider()}
        catchAll={<ErrorComponent />}
        dataProvider={dataProvider(supabaseClient)}
        routerProvider={{
          ...routerProvider,
          routes: [
              {
                path: "/dashboard",
                element: <Dashboard/>,
                layout:'true'

            },
          ],
      }}
      ReadyPage={ReadyPage}
      Layout = {CustomLayout}
      resources={[
        {
          name: "snippets",
          list: SnippetList,
          show: SnippetShow,
          edit: SnippetEdit,
          create: SnippetCreate,
      },
    ]}
  />
      
    </ChakraProvider>
  );
}

export default App;
