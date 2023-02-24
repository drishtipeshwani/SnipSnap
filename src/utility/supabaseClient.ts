import {createClient} from "@supabase/supabase-js"

const URL : string = ""
const KEY : string = ""

export const supabaseClient = createClient(URL,KEY)