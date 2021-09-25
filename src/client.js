import { createClient } from '@supabase/supabase-js'

const supabase = createClient('sizinBilgileriniz', 'sizinBilgileriniz')

export {
  supabase
}
