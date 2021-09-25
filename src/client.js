import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://nkajaowrakudffvitmff.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjU3ODk1MiwiZXhwIjoxOTQ4MTU0OTUyfQ.vQC_w1Pz6DqdE5_2r-0C3Wxt893pFh0d-lSJrtGawMQ')

export {
  supabase
}