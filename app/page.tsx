'use client'


import { NewEntry, EntryList } from "@/components/tarjetas";
import { Grid, Card, CardHeader } from "@mui/material";

export default function Home() {
  return (
    <main >
        <Grid container spacing={ 2 }>

            <Grid item xs={ 12 } sm={ 4 }>
              <Card sx={{ height: 'calc(100vh - 100px )' }}>
                <CardHeader title="Pendientes" />

                {/* Agregar una nueva entrada */}
                {/* Listado de las entradas */}
                <NewEntry />
                <EntryList status='pending'/>


              </Card>
            </Grid>

            <Grid item xs={ 12 } sm={ 4 }>
              <Card sx={{ height: 'calc(100vh - 100px )' }}>
                <CardHeader title="En Progreso" />
                <EntryList status='in-progress' />
              </Card>
            </Grid>

            <Grid item xs={ 12 } sm={ 4 }>
              <Card sx={{ height: 'calc(100vh - 100px )' }}>
                <CardHeader title="Completadas" />
                <EntryList status='finished' />
              </Card>
            </Grid>


        </Grid>
    </main>
  )
}
