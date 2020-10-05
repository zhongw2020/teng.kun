using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data.OracleClient;
using System.Data;
using System.Configuration;
namespace teng.kun.Common
{
    public class SqlHelper
    {

        //#region  连接10.55.1.36 MES正式数据库
        ///// <summary>
        ///// oracle 查询语句，返回一个datatable
        ///// </summary>
        ///// <param name="sql"></param>
        ///// <returns></returns>
        //public DataTable Select_datatable_Oracle_Zs(string ConnectionStrings2, string sql)
        //{
        //    // Create a new Oracle command  
        //    Oracle.ManagedDataAccess.Client.OracleCommand command = null;

        //    try
        //    {
        //        //Create a connection  
        //        using (Oracle.ManagedDataAccess.Client.OracleConnection connection = new Oracle.ManagedDataAccess.Client.OracleConnection(ConnectionStrings2))
        //        {
        //            connection.Open();
        //            command = new Oracle.ManagedDataAccess.Client.OracleCommand(sql, connection);
        //            Oracle.ManagedDataAccess.Client.OracleDataAdapter adapter = new Oracle.ManagedDataAccess.Client.OracleDataAdapter(command);
        //            DataSet ds = new DataSet();
        //            //System.Threading.Thread.Sleep(10);  
        //            adapter.Fill(ds);


        //            //if(ds.Tables.Count<1)   
        //            //    return;  
        //            DataTable dt = ds.Tables[0];
        //            connection.Close();
        //            return dt;

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //        throw ex;
        //    }

        //}
        ///// <summary>
        ///// oracle 查询语句，返回一个dataset
        ///// </summary>
        ///// <param name="sql"></param>
        ///// <returns></returns>
        //public DataSet Select_dateset_Oracle_Zs(string ConnectionStrings2, string sql)
        //{
        //    // Create a new Oracle command  
        //    Oracle.ManagedDataAccess.Client.OracleCommand command = null;

        //    try
        //    {
        //        //Create a connection  
        //        using (Oracle.ManagedDataAccess.Client.OracleConnection connection = new Oracle.ManagedDataAccess.Client.OracleConnection(ConnectionStrings2))
        //        {
        //            connection.Open();
        //            command = new Oracle.ManagedDataAccess.Client.OracleCommand(sql, connection);
        //            Oracle.ManagedDataAccess.Client.OracleDataAdapter adapter = new Oracle.ManagedDataAccess.Client.OracleDataAdapter(command);
        //            DataSet ds = new DataSet();
        //            //System.Threading.Thread.Sleep(10);  
        //            adapter.Fill(ds);

        //            connection.Close();
        //            return ds;


        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //        throw ex;
        //    }

        //}
        ///// <summary>
        ///// oracle 查询语句 返回一个string
        ///// </summary>
        ///// <param name="sql"></param>
        ///// <returns></returns>
        //public string Select_strOracle_Zs(string ConnectionStrings2, string sql)
        //{
        //    // Create a new Oracle command  

        //    Oracle.ManagedDataAccess.Client.OracleCommand command = null;
        //    string strd = "";
        //    try
        //    {
        //        //Create a connection  
        //        using (Oracle.ManagedDataAccess.Client.OracleConnection connection = new Oracle.ManagedDataAccess.Client.OracleConnection(ConnectionStrings2))
        //        {
        //            command = new Oracle.ManagedDataAccess.Client.OracleCommand(sql, connection);
        //            connection.Open();
        //            Oracle.ManagedDataAccess.Client.OracleDataReader reader = command.ExecuteReader();
        //            reader.Read();

        //            strd = reader.GetValue(0).ToString();
        //            connection.Close();
        //            return strd;

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "";
        //        throw ex;

        //    }

        //}
        ///// <summary>
        ///// oracle 更新（新增）语句，返回更新条数 int
        ///// </summary>
        ///// <param name="sql"></param>
        ///// <returns></returns>
        //public int UpdateOracle_Zs(string ConnectionStrings2, string sql)
        //{
        //    // Create a new Oracle command  

        //    Oracle.ManagedDataAccess.Client.OracleCommand command = null;

        //    try
        //    {
        //        //Create a connection  
        //        using (Oracle.ManagedDataAccess.Client.OracleConnection connection = new Oracle.ManagedDataAccess.Client.OracleConnection(ConnectionStrings2))
        //        {
        //            command = new Oracle.ManagedDataAccess.Client.OracleCommand(sql, connection);

        //            //打开数据库
        //            connection.Open();
        //            //执行操作命令
        //            int val = command.ExecuteNonQuery();
        //            connection.Close();

        //            //if(ds.Tables.Count<1)   
        //            //    return; 
        //            return val;

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //        throw ex;

        //    }

        //}
        //#endregion

        #region 连接10.55.1.31 SQLSERVER正式数据库
        /// <summary>
        /// sqlserver 查询语句，返回一个datatable
        /// </summary>

        public DataTable Select_Sqlserver(string ConnectionStrings3, string sql)
        {
            System.Data.DataTable dt;
            DataSet ds;
            SqlDataAdapter da;
            dt = new System.Data.DataTable();
            ds = new DataSet();
            SqlConnection conn = null;
            da = new SqlDataAdapter();
            try
            {
                conn = new SqlConnection(ConnectionStrings3);
                conn.Open();
                da = new SqlDataAdapter(sql, conn);
                da.Fill(ds, "table");

                dt = ds.Tables["table"];
                conn.Close();
                return dt;
            }
            catch (Exception ex)
            {
                return null;
                throw ex;

            }
        }
        /// <summary>
        /// SQLSERVER 查询并返回一个dateset
        /// </summary>
        /// <param name="str"></param>
        /// <param name="tableName"></param>
        /// <returns></returns>
        public DataSet Select_DateSet_Sqlserver(string ConnectionStrings3, string sql)
        {

            DataSet ds;
            SqlDataAdapter da;
            ds = new DataSet();
            SqlConnection conn = null;
            da = new SqlDataAdapter();
            try
            {

                conn = new SqlConnection(ConnectionStrings3);
                conn.Open();
                da = new SqlDataAdapter(sql, conn);
                da.Fill(ds, "table");
                conn.Close();

                return ds;
            }
            catch (Exception ex)
            {

                conn.Close();
                return null;
                throw ex;

            }
        }
        /// <summary>
        /// SQLSERVER 查询并返回一个字符串
        /// </summary>
        /// <param name="ConnectionStrings3"></param>
        /// <param name="sql"></param>
        /// <returns></returns>
        public string Select_Str_Sqlserver(string ConnectionStrings3, string sql)
        {
            SqlConnection conn = null;
            string str = "";
            try
            {
                conn = new SqlConnection(ConnectionStrings3);
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = conn;
                cmd.CommandText = sql;
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    str = reader.GetString(0);
                    conn.Close();

                    return str;
                }
                else
                {
                    conn.Close();
                    return "";
                }


            }

            catch (Exception ex)
            {

                return "";
            }

        }

  
        /// <summary>
        /// sqlserver 更新（插入）语句，返回更新条数 int 
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public int Update_Sqlserver(string ConnectionStrings3, string sql)
        {

            int p = 0;
            try
            {
                SqlConnection thisconnection = new SqlConnection(ConnectionStrings3);
                thisconnection.Open();
                SqlCommand thiscommand = thisconnection.CreateCommand();
                thiscommand.CommandText = sql;//SQL连接语句
                p = thiscommand.ExecuteNonQuery();
                thisconnection.Close();
                return p;
            }
            catch (Exception ex)
            {
                return 0;
                throw ex;

            }

        }

        #endregion
        /// <summary>
        /// sqlserver 执行存储过程，返回更新条数 int 
        /// </summary>
        /// <param name="procName"></param>
        /// <param name=""></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        public int ExecStoredProcedure_Sqlserver(string ConnectionStrings3, string procName, params SqlParameter[] parameters)
        {
            int rtn = 0;
            using (SqlConnection conn = new SqlConnection(ConnectionStrings3))
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    SqlTransaction st = conn.BeginTransaction();
                    cmd.Transaction = st;
                    try
                    {
                        cmd.CommandText = procName;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddRange(parameters);
                        rtn = cmd.ExecuteNonQuery();
                        st.Commit();
                        return rtn;
                    }
                    catch (SqlException sqlex)
                    {
                        st.Rollback();
                        throw sqlex;
                    }
                }
            }
        }

    }
}
